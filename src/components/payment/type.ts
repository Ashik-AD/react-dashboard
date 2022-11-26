export type Status = "primary" | "active" | "expired";
export type VendorName = "Visa" | "Mastercard";
export interface PaymentMethodOption {
    id: number;
    cardName: VendorName | "";
    holderName: string;
    pin: string;
    expireDate: string;
    cvc: string;
    status: Status;
    onEditCard: (cardID: number) => void;
}