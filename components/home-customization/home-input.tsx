import { CircleDollarSign, MousePointerClick } from "lucide-react";
import AddressInput from "../landing/address-input";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import { Label } from "../ui/label";

type Props = {};
const HomeInput = (props: Props) => {
  const [bill, setBill] = useState(0);
  const [address, setAddress] = useState("");

  useEffect(() => {
    // Get url params
    const urlParams = new URLSearchParams(window.location.search);
    const address = urlParams.get("address");
    const bill = urlParams.get("bill");

    if (address) {
      setAddress(address);
    }

    if (bill) {
      setBill(parseInt(bill));
    }
  }, []);

  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set("address", address);
    url.searchParams.set("bill", bill.toString());
    window.history.replaceState({}, "", url.toString());
  }, [address, bill]);

  return (
    <div className="w-full  text-black">
      <h1 className="text-3xl font-bold text-black">Build-A-Home</h1>
      <p className="mb-6 mt-1 text-pretty text-sm font-medium text-black/90">
        Customize your new home with the latest eco-friendly technology.
      </p>

      <p className="mb-1 text-pretty text-sm font-semibold text-black/90">
        Home Address
      </p>

      <AddressInput
        value={address}
        onAddressChange={(address) => {
          setAddress(address);
        }}
      />

      <p className="mb-1 mt-4 text-pretty text-sm font-semibold text-black/90">
        Monthly Electric Bill
      </p>

      <Input
        placeholder="Enter monthly electric bill"
        pattern="[0-9]"
        type="number"
        min={0}
        value={bill}
        onInput={(event) => {
          if (!event.currentTarget.validity.valid) {
            event.currentTarget.value = "";
          } else {
            setBill(parseInt(event.currentTarget.value));
          }
        }}
        className=" text-black"
      >
        <CircleDollarSign className="h-5 w-5" />
      </Input>

      <h2 className="mt-6 text-center text-2xl font-bold text-black">
        Camera Controls
      </h2>

      <p className="mb-3 text-pretty text-center text-sm font-medium text-black/90">
        Learn how to navigate the 3D model
      </p>

      <Label className="text-pretty text-sm font-semibold text-black/90">
        Rotate
      </Label>

      <div className="mb-3">
        <kbd className="font-mono pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 text-[10px] font-medium text-muted-foreground opacity-100">
          Left Click
        </kbd>{" "}
        +{" "}
        <kbd className="font-mono pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 text-[10px] font-medium text-muted-foreground opacity-100">
          Drag
        </kbd>
      </div>

      <Label className="text-pretty text-sm font-semibold text-black/90">
        Pan
      </Label>

      <div className="mb-3">
        <kbd className="font-mono pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 text-[10px] font-medium text-muted-foreground opacity-100">
          Right Click
        </kbd>{" "}
        +{" "}
        <kbd className="font-mono pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 text-[10px] font-medium text-muted-foreground opacity-100">
          Drag
        </kbd>
      </div>

      <Label className="text-pretty text-sm font-semibold text-black/90">
        Zoom
      </Label>

      <div className="mb-3">
        <kbd className="font-mono pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 text-[10px] font-medium text-muted-foreground opacity-100">
          Scroll
        </kbd>
      </div>
    </div>
  );
};
export default HomeInput;
