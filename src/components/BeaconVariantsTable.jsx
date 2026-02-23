import { variants } from "../lib/consts";

export function BeaconVariantsTable() {
  const rows = Object.keys(variants);

  return (
    <div className="items-center justify-center pb-[4vw] bg-[#2e2f41] px-[5vw]">
      <table className="w-full table-fixed border-collapse">
        <thead>
          <tr>
            {rows.map((key) => (
              <th key={key} className="py-2 text-left pr-[4vw]">
                <img src={variants[key].imageUrl} alt={variants[key].name} />
              </th>
            ))}
          </tr>
          <tr>
            {rows.map((key) => (
              <th
                key={key}
                className="py-2 text-left"
                style={{ fontSize: "1.8vw" }}
              >
                {variants[key].name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <>
            <tr className="border-b border-[#ffcc33]/60">
              <td className="text-[#ffcc33] font-extralight text-[1.7vw] mb-4 pt-8">
                DATA
              </td>
            </tr>
            <tr>
              {rows.map((key) => (
                <td
                  key={key}
                  className="py-2 text-left font-light"
                  style={{ fontSize: "1.2vw" }}
                >
                  {variants[key].data}
                </td>
              ))}
            </tr>
          </>
          <>
            <tr className="border-b border-[#ffcc33]/60">
              <td className="text-[#ffcc33] font-extralight text-[1.7vw] mb-4 pt-8">
                SIZE
              </td>
            </tr>
            <tr>
              {rows.map((key) => (
                <td
                  key={key}
                  className="py-2 text-left font-light"
                  style={{ fontSize: "1.2vw" }}
                >
                  {variants[key].size}
                </td>
              ))}
            </tr>
          </>
          <>
            <tr className="border-b border-[#ffcc33]/60">
              <td className="text-[#ffcc33] font-extralight text-[1.7vw] mb-4 pt-8">
                WEIGHT
              </td>
            </tr>
            <tr>
              {rows.map((key) => (
                <td
                  key={key}
                  className="py-2 text-left font-light"
                  style={{ fontSize: "1.2vw" }}
                >
                  {variants[key].weight}
                </td>
              ))}
            </tr>
          </>
          <>
            <tr className="border-b border-[#ffcc33]/60">
              <td className="text-[#ffcc33] font-extralight text-[1.7vw] mb-4 pt-8">
                LEAD TIME
              </td>
            </tr>
            <tr>
              {rows.map((key) => (
                <td
                  key={key}
                  className="py-2 text-left font-light"
                  style={{ fontSize: "1.2vw" }}
                >
                  {variants[key].leadTime}
                </td>
              ))}
            </tr>
          </>
          <>
            <tr className="border-b border-[#ffcc33]/60">
              <td className="text-[#ffcc33] font-extralight text-[1.7vw] mb-4 pt-8">
                DATASHEET
              </td>
            </tr>
            <tr>
              {rows.map((key) => (
                <td
                  key={key}
                  className="py-2 text-left font-light"
                  style={{ fontSize: "1.2vw" }}
                >
                  <button
                    onClick={() => window.open(variants[key].dataSheetURL)}
                    className="border border-white text-white w-[12vw] py-[1vh] hover:bg-[#ffcc33] hover:border-[#ffcc33] hover:text-[#252634] transition-colors"
                  >
                    <p>DOWNLOAD</p>
                  </button>
                </td>
              ))}
            </tr>
          </>
          <>
            <tr className="border-b border-[#ffcc33]/60">
              <td className="text-[#ffcc33] font-extralight text-[1.7vw] mb-4 pt-8">
                PURCHASE
              </td>
            </tr>
            <tr>
              {rows.map((key) => (
                <td
                  key={key}
                  className="py-2 text-left font-light"
                  style={{ fontSize: "1.2vw" }}
                >
                  <button
                    onClick={() => window.open(variants[key].buyURL)}
                    className="border border-white text-white w-[12vw] py-[1vh] hover:bg-[#ffcc33] hover:border-[#ffcc33] hover:text-[#252634] transition-colors"
                  >
                    <p>{variants[key].preOrder ? "PRE-ORDER" : "BUY NOW"}</p>
                  </button>
                </td>
              ))}
            </tr>
          </>
        </tbody>
      </table>
    </div>
  );
}
