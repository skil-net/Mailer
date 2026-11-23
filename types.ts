import type { Topic } from "./lib/topics";
import type { AttachmentType } from "./lib/attachments";

export type Sex = 0 | 1 | 2;
export type TargetSex = "all" | "female" | "male";
export type Role = "admin" | "user";

export interface Profile {
  firstName: string;
  lastName: string;
  photo200: string | null;
  screenName: string;
  monogram?: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  vkId: number;
  role: Role;
  profileSource: "vk" | "local" | null;
  profile: Profile | null;
}

export interface Group {
  id: string;
  vkGroupId: number;
  name: string;
  photoUrl: string | null;
  accessToken: string;
  tokenValid: boolean;
  topic: Topic;
  isPartner: boolean;
  partnerPriceRub: number;
  partnerDiscount: number;
  partnerDescription: string;
  subscriberCount: number;
  createdAt: number;
  blocked?: boolean;
}

export interface Subscriber {
  id: string;
  groupId: number;
  vkUserId: number;
  firstName: string;
  lastName: string;
  screenName?: string;
  sex: Sex;
  photo100: string | null;
  lastMessageAt: number;
  consent: boolean;
}

export interface AttachmentItem {
  type: AttachmentType;
  attachment: string;
  label: string;
}

export type KeyboardKind = "inline" | "one_time";
export type CampaignStatus = "draft" | "scheduled" | "sending" | "paused" | "sent" | "failed";

export interface GroupStat {
  total: number;
  sent: number;
  failed: number;
}

export interface Campaign {
  id: string;
  groupIds: number[];
  title: string;
  messageText: string;
  attachments: AttachmentItem[];
  keyboardJson: string;
  keyboardType: KeyboardKind;
  targetSex: TargetSex;
  scheduledAt: number | null;
  status: CampaignStatus;
  sentCount: number;
  failedCount: number;
  totalCount: number;
  priceRub: number;
  paid: boolean;
  partnerGroupId?: number;
  groupStats: Record<number, GroupStat>;
  lastError?: string;
  createdAt: number;
}

export interface OutboxItem {
  id: string;
  campaignId: string;
  groupId: number;
  vkUserId: number;
  status: "sent" | "failed";
  renderedText?: string;
  error?: string;
  sentAt?: number;
}

export type TxStatus = "pending" | "awaiting_confirmation" | "confirmed" | "rejected" | "expired";
export type TxType = "deposit" | "withdraw" | "spend" | "refund";

export interface Transaction {
  id: string;
  type: TxType;
  amountRub: number;
  feeRub: number;
  status: TxStatus;
  title?: string;
  bankName?: string;
  phone?: string;
  operationId?: string;
  adminComment?: string;
  bonusPercent?: number;
  bonusRub?: number;
  timerExpiresAt?: number;
  createdAt: number;
  processedAt?: number;
}

export interface Promotion {
  id: string;
  title: string;
  bonusPercent: number;
  minAmountRub: number;
  active: boolean;
  createdAt: number;
}

export interface Settings {
  baseCampaignPriceRub: number;
  serviceCommissionPercent: number;
  depositPhone: string;
  depositBanks: string[];
  paymentTimerMinutes: number;
  banks: string[];
}

export interface PartnerRequest {
  id: string;
  groupId: string;
  priceRub: number;
  discount: number;
  topic: Topic;
  description: string;
  status: "pending" | "approved" | "rejected";
  createdAt: number;
}
