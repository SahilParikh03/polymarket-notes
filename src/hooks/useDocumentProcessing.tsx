import { logger } from '@/utils/logger';

import { useMutation } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export const useDocumentProcessing = () => {
  const { toast } = useToast();

  const processDocument = useMutation({
    mutationFn: async ({
      sourceId,
      filePath,
      sourceType
    }: {
      sourceId: string;
      filePath: string;
      sourceType: string;
    }) => {
      logger.log('Initiating document processing for:', { sourceId, filePath, sourceType });

      const { data, error } = await supabase.functions.invoke('process-document', {
        body: {
          sourceId,
          filePath,
          sourceType
        }
      });

      if (error) {
        logger.error('Document processing error:', error);
        throw error;
      }

      return data;
    },
    onSuccess: (data) => {
      logger.log('Document processing initiated successfully:', data);
    },
    onError: (error) => {
      logger.error('Failed to initiate document processing:', error);
      // Error will be handled by parent component via Promise.allSettled
    },
  });

  return {
    processDocumentAsync: processDocument.mutateAsync,
    processDocument: processDocument.mutate,
    isProcessing: processDocument.isPending,
  };
};
