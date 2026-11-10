import { profile } from '@/data/site';
import { trackEvent } from '@/lib/analytics';

export const bookCall = (source: string) => {
  trackEvent({ action: 'schedule_call_click', category: 'engagement', label: source });
  if (typeof window !== 'undefined' && window.Cal) {
    window.Cal('modal', { calLink: profile.calLink, config: { layout: 'month_view', theme: 'light' } });
  } else {
    window.open(`https://cal.com/${profile.calLink}`, '_blank', 'noopener');
  }
};

export const trackOut = (label: string) => trackEvent({ action: 'outbound_click', category: 'outbound', label });
