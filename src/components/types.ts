export interface IInvoiceItem {
  itemName: string;
  qty: string;
  price: number;
  total: number;
  id: string;
}

export interface IInvoiceModalData {
  invoiceDate: string | null;
  docId: null;
  loading: null;
  billerStreetAddress: null;
  billerCity: null;
  billerZipCode: null;
  billerCountry: null;
  clientName: null;
  clientEmail: null;
  clientStreetAddress: null;
  clientCity: null;
  clientZipCode: null;
  clientCountry: null;
  invoiceDateUnix: number | null;
  paymentTerms: string;
  paymentDueDateUnix: null | number;
  paymentDueDate: null | string;
  productDescription: null;
  invoicePending: null;
  invoiceDraft: null;
  invoiceItemList: IInvoiceItem[];
  invoiceTotal: 0;
  dateOptions: Intl.DateTimeFormatOptions;
}
