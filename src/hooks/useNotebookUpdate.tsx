import { logger } from '@/utils/logger';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export const useNotebookUpdate = () => {
  const queryClient = useQueryClient();

  const updateNotebook = useMutation({
    mutationFn: async ({ id, updates }: { id: string; updates: { title?: string; description?: string } }) => {
      logger.log('Updating notebook:', id, updates);
      
      const { data, error } = await supabase
        .from('notebooks')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) {
        logger.error('Error updating notebook:', error);
        throw error;
      }
      
      logger.log('Notebook updated successfully:', data);
      return data;
    },
    onSuccess: (data) => {
      logger.log('Mutation success, invalidating queries');
      queryClient.invalidateQueries({ queryKey: ['notebook', data.id] });
      queryClient.invalidateQueries({ queryKey: ['notebooks'] });
    },
    onError: (error) => {
      logger.error('Mutation error:', error);
    },
  });

  return {
    updateNotebook: updateNotebook.mutate,
    isUpdating: updateNotebook.isPending,
  };
};
