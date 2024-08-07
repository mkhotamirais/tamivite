import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useSisko } from "./useSisko";

type InvoiceState = {
  sale_id: string;
  customer: { name: string; phone: string; address: string };
  sale_price: string;
  sale_date: string;
  items: { name: string; weight: string; buyPrice: string }[];
  sale_payment_status: string;
  sale_keterangan: string;
};

export default function SiskoInvoice() {
  const { cartItems } = useSisko();
  const [invoice, setInvoice] = useState<InvoiceState | null>(null);

  useEffect(() => {
    axios.get(`https://demo.sistemtoko.com/public/show_invoice/101C2O`).then((res) => setInvoice(res.data.sale));
  }, []);

  if (cartItems.length === 0) {
    return <Navigate to="/sisko/cart" replace />;
  }

  return (
    <div className="bg-white rounded">
      {invoice && invoice.sale_id && (
        <table className="w-full">
          <tbody className="text-left">
            <tr>
              <th>Id</th>
              <td>{invoice?.sale_id}</td>
            </tr>
            <tr>
              <th>Customer/Phone</th>
              <th>
                {invoice?.customer?.name} - {invoice?.customer?.phone}
              </th>
            </tr>
            <tr>
              <th>Customer Address</th>
              <td>{invoice?.customer?.address}</td>
            </tr>
            <tr>
              <th>Price</th>
              {/* <td>Rp{parseInt(invoice?.sale_price?.split(".").join("")).toLocaleString("id-ID")}</td> */}
              <td>Rp{Number(invoice?.sale_price).toLocaleString("id-ID")}</td>
            </tr>
            <tr>
              <th>Date</th>
              <td>{invoice?.sale_date}</td>
            </tr>
            <tr>
              <th>Product Name</th>
              <td>{invoice?.items[0]?.name}</td>
            </tr>
            <tr>
              <th>Product Weight</th>
              <td>{invoice?.items[0]?.weight}gr</td>
            </tr>
            <tr>
              <th>Product Price</th>
              {/* <td>Rp{parseInt(invoice?.items[0]?.buyPrice?.split(".").join("")).toLocaleString("id-ID")}</td> */}
              <td>Rp{Number(invoice?.items[0]?.buyPrice).toLocaleString("id-ID")}</td>
            </tr>
            <tr>
              <th>Status</th>
              <td>{invoice?.sale_payment_status}</td>
            </tr>
            <tr>
              <th>Notes</th>
              <td>{invoice?.sale_keterangan}</td>
            </tr>
          </tbody>
        </table>
      )}
      <Link
        to={"/sisko"}
        className="inline-block border p-2 bg-slate-500 text-white rounded my-3 hover:opacity-70"
        replace
      >
        Back To Home
      </Link>
    </div>
  );
}
