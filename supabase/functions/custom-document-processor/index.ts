
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { source_id, file_path } = await req.json()

    if (!source_id || !file_path) {
      return new Response(
        JSON.stringify({ error: 'source_id and file_path are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    console.log('Processing custom document:', { source_id, file_path });

    // Get the webhook URL from environment
    const webhookUrl = Deno.env.get('CUSTOM_PROCESSING_WEBHOOK_URL')
    if (!webhookUrl) {
      console.error('CUSTOM_PROCESSING_WEBHOOK_URL not configured')
      return new Response(
        JSON.stringify({ error: 'Custom processing webhook URL not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Get authentication header
    const authHeader = Deno.env.get('CUSTOM_PROCESSING_AUTH')

    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Update custom processing status to 'processing'
    await supabaseClient
      .from('sources')
      .update({ custom_processing_status: 'processing' })
      .eq('id', source_id)

    console.log('Calling custom webhook:', webhookUrl)

    // Prepare payload for your webservice
    const payload = {
      source_id,
      file_path,
      callback_url: `${Deno.env.get('SUPABASE_URL')}/functions/v1/custom-document-callback`
    }

    // Call your webservice
    const headers: Record<string, string> = {
      'Content-Type': 'application/json'
    }

    if (authHeader) {
      headers['Authorization'] = authHeader
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload)
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Custom webhook failed:', response.status, errorText)

      // Update status to failed
      await supabaseClient
        .from('sources')
        .update({
          custom_processing_status: 'failed',
          custom_processing_metadata: { error: errorText, status_code: response.status }
        })
        .eq('id', source_id)

      return new Response(
        JSON.stringify({ error: 'Custom processing webhook failed', details: errorText }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const result = await response.json()
    console.log('Custom webhook response:', result)

    return new Response(
      JSON.stringify({ success: true, message: 'Custom processing initiated', result }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('Error in custom-document-processor:', error)

    return new Response(
      JSON.stringify({ error: error.message || 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
