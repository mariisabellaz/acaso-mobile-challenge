import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formattedDateString(dateString: string): string {
  if (!dateString) return '';

  const date = new Date(dateString);
  return formatDistanceToNow(date, { addSuffix: true, locale: ptBR });
}
