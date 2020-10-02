import { debounce } from "lodash";
import React, { useCallback, useState } from "react";
import BarcodeScannerComponent from "react-webcam-barcode-scanner";
import "./Scanner.scss";

export const Scanner = () => {
  const [data, setData]: [string[], any] = useState([]);

  // @ts-ignore
  const addScannedItem = useCallback(
    debounce((text) => setData([text, ...data]), 1000)
  );

  const handleScannedItem = (text: any) => {
    addScannedItem(text);
  };

  return (
    <>
      {data.map((t) => (
        <p>{t}</p>
      ))}
      <div className="Scanner">
        <div className="Scanner__element">Loading camera...</div>
        <div className="Scanner__element">
          <BarcodeScannerComponent
            width={window.innerWidth - 100}
            height={window.innerHeight - 100}
            onUpdate={(err: unknown, result: any) => {
              if (result) {
                const { text }: { text: string } = result;
                console.log(text);
                handleScannedItem(text);
              }
            }}
          />
        </div>
      </div>
    </>
  );
};
