import type { ReactNode } from 'react';

export type MenuKey =
  | 'dashboard'
  | 'work-queue'
  | 'properties'
  | 'calendar'
  | 'customers'
  | 'interactions'
  | 'pipeline'
  | 'record-transaction'
  | 'commission'
  | 'valuation'
  | 'legal-approval'
  | 'deposit'
  | 'reports'
  | 'audit-log';

export type InternalPropertyStatus =
  | 'pending_review'
  | 'under_valuation'
  | 'pending_legal'
  | 'active'
  | 'rented'
  | 'rejected'
  | 'terminated';

export type InternalProperty = {
  id: string;
  code: string;
  title: string;
  type: string;
  address: string;
  district: string;
  city: string;
  area: number;
  price: number;
  status: InternalPropertyStatus;
  ownerName: string;
  ownerPhone: string;
  assignedBroker?: string;
  assignedValuator?: string;
  submittedAt: string;
  updatedAt: string;
  thumbnail: string;
  depositAmount?: number;
  hasLegalFlag: boolean;
};

export type WorkItemType =
  | 'new_submission'
  | 'valuation_scheduled'
  | 'legal_review'
  | 'viewing_request'
  | 'deposit_refund'
  | 'contract_approval'
  | 'transaction_record';

export type Priority = 'high' | 'medium' | 'low';

export type WorkItem = {
  id: string;
  type: WorkItemType;
  title: string;
  subtitle: string;
  propertyCode: string;
  priority: Priority;
  dueDate: string;
  status: 'open' | 'in_progress' | 'done';
  assignedTo?: string;
};

export type Appointment = {
  id: string;
  propertyCode: string;
  propertyTitle: string;
  clientName: string;
  clientPhone: string;
  brokerName: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  notes?: string;
};

export type Customer = {
  id: string;
  name: string;
  phone: string;
  email: string;
  status: 'active' | 'inactive' | 'converted';
  assignedBroker: string;
  lastContact: string;
  interestType: string;
  budget: string;
  viewingCount: number;
};

export type PipelineStage =
  | 'lead'
  | 'viewing'
  | 'negotiating'
  | 'pending_contract'
  | 'signed'
  | 'lost';

export type RentalDeal = {
  id: string;
  propertyCode: string;
  propertyTitle: string;
  clientName: string;
  brokerName: string;
  stage: PipelineStage;
  price: number;
  startDate?: string;
  updatedAt: string;
};

export type DepositStatus = 'held' | 'refunded' | 'deducted' | 'pending_refund';

export type DepositRecord = {
  id: string;
  propertyCode: string;
  ownerName: string;
  amount: number;
  status: DepositStatus;
  receivedAt: string;
  refundedAt?: string;
  deductReason?: string;
  deductAmount?: number;
};

export type CommissionRecord = {
  id: string;
  brokerName: string;
  propertyCode: string;
  transactionValue: number;
  rate: number;
  amount: number;
  status: 'pending' | 'approved' | 'paid';
  month: string;
};

export type AuditLogEntry = {
  time: string;
  actor: string;
  role: string;
  action: string;
  target: string;
  ip: string;
  type?: 'create' | 'update' | 'delete' | 'login' | 'view';
};

export type MenuItem = {
  key: MenuKey;
  label: string;
  path: string;
  icon: ReactNode;
  group?: string;
};

export type Tab =
  | 'owner'
  | 'docs'
  | 'workflow'
  | 'appointments'
  | 'history'
  | 'contract'
  | 'finance';

export type KpiCard = {
  label: string;
  value: string | number;
  sub?: string;
  color: string;
  icon: ReactNode;
};
