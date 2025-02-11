import { frontendURL } from '../../helper/URLHelper';

const reports = accountId => ({
  routes: [
    'settings_account_reports',
    'csat_reports',
    'agent_reports',
    'label_reports',
    'inbox_reports',
    'team_reports',
  ],
  menuItems: [
    {
      icon: 'arrow-trending-lines',
      label: 'REPORTS_OVERVIEW',
      hasSubMenu: false,
      toState: frontendURL(`accounts/${accountId}/reports/overview`),
      toStateName: 'settings_account_reports',
    },
    {
      icon: 'emoji',
      label: 'CSAT',
      hasSubMenu: false,
      toState: frontendURL(`accounts/${accountId}/reports/csat`),
      toStateName: 'csat_reports',
    },
    {
      icon: 'people',
      label: 'REPORTS_AGENT',
      hasSubMenu: false,
      toState: frontendURL(`accounts/${accountId}/reports/agent`),
      toStateName: 'agent_reports',
    },
    {
      icon: 'tag',
      label: 'REPORTS_LABEL',
      hasSubMenu: false,
      toState: frontendURL(`accounts/${accountId}/reports/label`),
      toStateName: 'label_reports',
    },
    {
      icon: 'mail-inbox-all',
      label: 'REPORTS_INBOX',
      hasSubMenu: false,
      toState: frontendURL(`accounts/${accountId}/reports/inboxes`),
      toStateName: 'inbox_reports',
    },
    {
      icon: 'people-team',
      label: 'REPORTS_TEAM',
      hasSubMenu: false,
      toState: frontendURL(`accounts/${accountId}/reports/teams`),
      toStateName: 'team_reports',
    },
  ],
});

export default reports;
