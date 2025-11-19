-- Add custom processing fields to sources table
-- This allows tracking of custom webservice processing status independently from N8N workflow

ALTER TABLE public.sources
ADD COLUMN IF NOT EXISTS custom_processing_status text DEFAULT NULL,
ADD COLUMN IF NOT EXISTS custom_processing_metadata jsonb DEFAULT '{}',
ADD COLUMN IF NOT EXISTS custom_processed_at timestamp with time zone DEFAULT NULL;

-- Add index for filtering by custom processing status
CREATE INDEX IF NOT EXISTS idx_sources_custom_processing_status
ON public.sources(custom_processing_status);

-- Add comment for documentation
COMMENT ON COLUMN public.sources.custom_processing_status IS 'Status of custom webservice processing (pending, processing, completed, failed)';
COMMENT ON COLUMN public.sources.custom_processing_metadata IS 'Metadata returned from custom processing webservice';
COMMENT ON COLUMN public.sources.custom_processed_at IS 'Timestamp when custom processing completed';
