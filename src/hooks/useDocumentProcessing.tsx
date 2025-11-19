
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
      console.log('Initiating document processing for:', { sourceId, filePath, sourceType });

      const { data, error } = await supabase.functions.invoke('process-document', {
        body: {
          sourceId,
          filePath,
          sourceType
        }
      });

      if (error) {
        console.error('Document processing error:', error);
        throw error;
      }

      return data;
    },
    onSuccess: (data) => {
      console.log('Document processing initiated successfully:', data);
    },
    onError: (error) => {
      console.error('Failed to initiate document processing:', error);
      // Error will be handled by parent component via Promise.allSettled
    },
  });

  return {
    processDocumentAsync: processDocument.mutateAsync,
    processDocument: processDocument.mutate,
    isProcessing: processDocument.isPending,
  };
};
