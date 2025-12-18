import * as contentful from "contentful";
import type { EntryFieldTypes } from "contentful";

export interface School {
  contentTypeId: "card";
  fields: {
    namaMadrasah: EntryFieldTypes.Text;
    kategori: EntryFieldTypes.Text; // RA, MI, MTs, MA
    logo: EntryFieldTypes.AssetLink;
    linkRdm: EntryFieldTypes.Text;
    nsm?: EntryFieldTypes.Integer;
    status?: EntryFieldTypes.Boolean;
  };
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});