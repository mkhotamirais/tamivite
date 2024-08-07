import axios from "axios";
import { useSisko } from "./useSisko";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const url = "https://demo.sistemtoko.com";

export default function SiskoCheckout() {
  const { cartItems, clearCartItems } = useSisko();

  const [prov1, setProv1] = useState<{ province_id: string; province: string }[] | null>([]);
  const [idProv1, setIdProv1] = useState("");
  const [city1, setCity1] = useState<{ city_id: string; city_name: string }[] | null>([]);
  const [idCity1, setIdCity1] = useState("");
  const [district1, setDistrict1] = useState<{ subdistrict_id: string; subdistrict_name: string }[] | null>([]);
  const [idDistrict1, setIdDistrict1] = useState("");

  const [prov2, setProv2] = useState<{ province_id: string; province: string }[] | null>([]);
  const [idProv2, setIdProv2] = useState("");
  const [city2, setCity2] = useState<{ city_id: string; city_name: string }[] | null>([]);
  const [idCity2, setIdCity2] = useState("");
  const [district2, setDistrict2] = useState<{ subdistrict_id: string; subdistrict_name: string }[] | null>([]);
  const [idDistrict2, setIdDistrict2] = useState("");

  const weight = cartItems.reduce((acc, cur) => {
    const price = Number(cur.weight);
    return acc + price;
  }, 0);

  const [ongkir, setOngkir] = useState<{ service: string; description: string; cost: { value: string }[] }[] | null>(
    []
  );
  const [errOngkir, setErrOngkir] = useState<string | null>(null);

  useEffect(() => {
    axios.get(`${url}/province`).then((res) => setProv1(res.data));
    if (idProv1) axios.get(`${url}/city/${idProv1}`).then((res) => setCity1(res.data));
    if (idProv1 && idCity1) axios.get(`${url}/subdistrict?id=${idCity1}`).then((res) => setDistrict1(res.data));

    if (idProv1 && idCity1 && idDistrict1) axios.get(`${url}/province`).then((res) => setProv2(res.data));
    if (idProv1 && idCity1 && idDistrict1 && idProv2)
      axios.get(`${url}/city/${idProv2}`).then((res) => setCity2(res.data));
    if (idProv1 && idCity1 && idDistrict1 && idProv2 && idCity2)
      axios.get(`${url}/subdistrict?id=${idCity2}`).then((res) => setDistrict2(res.data));

    if (weight && idDistrict1 && idDistrict2)
      axios.get(`${url}/ongkir?id=${idDistrict1}&destination=${idDistrict2}&weight=${weight}`).then((res) => {
        if (res?.data?.status == false) setErrOngkir(res?.data?.msg);
        else setOngkir(res?.data?.data[0]?.costs);
      });
  }, [idProv1, idCity1, idDistrict1, idProv2, idCity2, idDistrict2, weight]);

  useEffect(() => {
    if (!idProv1 || idProv1 == "") {
      setIdCity1("");
      setCity1([]);
    }
    if (!idCity1 || idCity1 == "") {
      setIdDistrict1("");
      setDistrict1([]);
    }
    if (!idDistrict1 || idDistrict1 == "") {
      setIdProv2("");
      setProv2([]);
    }
    if (!idProv2 || idProv2 == "") {
      setIdCity2("");
      setCity2([]);
    }
    if (!idCity2 || idCity2 == "") {
      setIdDistrict2("");
      setDistrict2([]);
    }
  }, [idProv1, idCity1, idDistrict1, idProv2, idCity2]);

  if (cartItems.length === 0) {
    return <Navigate to="/sisko/cart" replace />;
  }

  return (
    <div>
      <h2 className="text-lg my-3 font-medium">Set destination to get delivery fee</h2>
      <div className="space-y-2">
        <h3 className="font-semibold my-2">Address</h3>
        <Select defaultValue={idProv1} onValueChange={setIdProv1}>
          <SelectTrigger>
            <SelectValue placeholder="Province" />
          </SelectTrigger>
          <SelectContent>
            {prov1 &&
              prov1?.map((item, i) => (
                <SelectItem key={i} value={item.province_id}>
                  {item.province}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
        <Select onValueChange={setIdCity1}>
          <SelectTrigger>
            <SelectValue placeholder="City" />
          </SelectTrigger>
          <SelectContent>
            {city1 &&
              city1?.map((item, i) => (
                <SelectItem key={i} value={item?.city_id}>
                  {item?.city_name}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
        <Select onValueChange={setIdDistrict1}>
          <SelectTrigger>
            <SelectValue placeholder="District" />
          </SelectTrigger>
          <SelectContent>
            {district1 &&
              district1?.map((item, i) => (
                <SelectItem key={i} value={item.subdistrict_id}>
                  {item?.subdistrict_name}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold my-2">Destination</h3>
        <Select defaultValue={idProv2} onValueChange={setIdProv2}>
          <SelectTrigger>
            <SelectValue placeholder="Province" />
          </SelectTrigger>
          <SelectContent>
            {prov2 &&
              prov2?.map((item, i) => (
                <SelectItem key={i} value={item.province_id}>
                  {item.province}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
        <Select onValueChange={setIdCity2}>
          <SelectTrigger>
            <SelectValue placeholder="City" />
          </SelectTrigger>
          <SelectContent>
            {city2 &&
              city2?.map((item, i) => (
                <SelectItem key={i} value={item?.city_id}>
                  {item?.city_name}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
        <Select onValueChange={setIdDistrict2}>
          <SelectTrigger>
            <SelectValue placeholder="District" />
          </SelectTrigger>
          <SelectContent>
            {district2 &&
              district2?.map((item, i) => (
                <SelectItem key={i} value={item.subdistrict_id}>
                  {item?.subdistrict_name}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <h3 className="my-2 font-semibold">Choose delivery fee</h3>
        {errOngkir && <div className="text-red-500 italic">{errOngkir}</div>}

        <Select disabled={!!(!idDistrict1 || !idDistrict2 || errOngkir)}>
          <SelectTrigger>
            <SelectValue placeholder="select ongkir" />
          </SelectTrigger>
          <SelectContent>
            {ongkir &&
              ongkir?.map((ong, i) => (
                <SelectItem key={i} value={ong?.cost[0]?.value}>
                  {ong?.service} - {ong?.description} - {ong?.cost[0]?.value}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
        <br />
        <Link to="../invoice">
          <Button onClick={clearCartItems} disabled={!!(!idDistrict1 || !idDistrict2 || errOngkir)}>
            Order
          </Button>
        </Link>
      </div>
    </div>
  );
}
