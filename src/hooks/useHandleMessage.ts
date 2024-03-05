/**
 * 웹소켓 메세지 처리 훅 샘플
 * 기존에 선언적으로 표시하기 위해 각 컴포넌트에서 weboscket 메세지를 처리하였습니다.
 * 각 컴포넌트에서 useCallback 을 통해 메모자이징을 하였지만, 중복된 내용을 처리하는 것이였고,
 * 로직을 컴포넌트 밖으로 분리하여 관리의 복잡성을 줄이고 재사용성을 높히고, 성능을 높이기 위해 훅으로 제작합니다.
 * 해당 훅은 웹소켓에서 응답받은 메세지를 처리하고 전역 Atom 값을 업데이트합니다.
 */

// import { useCallback } from "react";
// import { useSetRecoilState } from "recoil";

// import { Common, CurrentTradeCompanyName, MyAssets, StockQuotesKR, StockQuotesUS, TCountry } from "@/recoils/store";

// interface IResponse {
//   type: string;
//   rate: number;
//   country: TCountry;
//   name: string;
//   price: number;
//   amount: number;
// }

// export const useHandleMessage = () => {
//   const setCommon = useSetRecoilState(Common);
//   const setStockQuotesUS = useSetRecoilState(StockQuotesUS);
//   const setStockQuotesKR = useSetRecoilState(StockQuotesKR);
//   const setCurrentTradeCompanyName = useSetRecoilState(CurrentTradeCompanyName);
//   const setMyAssets = useSetRecoilState(MyAssets);

//   /**
//    * case block 내에 const 사용은 scope 문제가 발생할 수 있습니다. (Unexpected lexical declaration in case block)
//    * 따라서 {}를 감싸서 case block내의 변수 선언이 해당 블록에만 적용될 수 있도록 합니다.
//    */
//   const handleMessage = useCallback(
//     (event: MessageEvent) => {
//       // response는 모든 웹소켓 메세지 응답의 타입을 가질 수 있습니다.
//       const response: IResponse = JSON.parse(event.data);

//       // 각 type에 따라 response에 대한 타입을 지정해주어 타입 안정성을 보장합니다.
//       switch (response.type) {
//         case "RATE": {
//           const _response = response as Pick<IResponse, "type" | "rate">;
//           setCommon(prev => ({
//             ...prev,
//             rate: _response.rate,
//           }));
//           break;
//         }

//         case "INFO": {
//           const _response = response as Pick<IResponse, "type" | "country" | "rate">;
//           setCommon(prev => ({
//             ...prev,
//             [_response.country]: _response.rate,
//           }));
//           break;
//         }

//         case "PRICE": {
//           const _response = response as Pick<IResponse, "type" | "country" | "name" | "price">;
//           const setStockQuotes = _response.country === "US" ? setStockQuotesUS : setStockQuotesKR;
//           setStockQuotes(prev =>
//             prev.map(quote => {
//               if (quote.companyName === _response.name) {
//                 return {
//                   ...quote,
//                   price: _response.price,
//                   rate: exactPercentage(_response.price, quote.closedPrice),
//                   diff: exactDiff(_response.price, quote.closedPrice),
//                 };
//               } else {
//                 return quote;
//               }
//             }),
//           );
//           setMyAssets(prevAssets =>
//             prevAssets.map(asset => {
//               if (asset.companyName === _response.name && _response.price) {
//                 return { ...asset, price: _response.price };
//               }
//               return asset;
//             }),
//           );
//           break;
//         }

//         case "NEW_TRADE": {
//           const _response = response as Pick<IResponse, "type" | "rate" | "country" | "name" | "price" | "amount">;
//           setCurrentTradeCompanyName(_response.name);
//           setMyAssets(prev =>
//             prev.map(quote => {
//               if (quote.companyName === _response.name && quote.country === _response.country) {
//                 return {
//                   ...quote,
//                   quantity: _response.amount,
//                 };
//               } else {
//                 return quote;
//               }
//             }),
//           );
//           break;
//         }

//         default:
//           break;
//       }
//     },
//     [setCommon, setCurrentTradeCompanyName, setMyAssets, setStockQuotesKR, setStockQuotesUS],
//   );

//   return handleMessage;
// };
