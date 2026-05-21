import { getLlmsText } from '@/content/llms';

export function GET() {
  return new Response(getLlmsText(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
