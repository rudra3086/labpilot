export interface SessionSummary {
  id: string;
  className: string;
  status: 'active' | 'ended' | 'scheduled';
  connectedStudents: number;
}

export interface PolicyTag {
  id: string;
  name: string;
  kind: 'application' | 'website';
  mode: 'allowed' | 'restricted';
}
