/**
 * sample
 * recoil selector를 활용한 비동기 데이터 defualt 값으로 설정
 * suspense와 함께 사용
 */

// const { persistAtom } = recoilPersist({
//   key: "prevData",
//   storage: sessionStorage,
// });

// export const Common = atom<ICommon>({
//   key: COMMON_KEY,
//   default: selector({
//     key: `fetch${COMMON_KEY}`,
//     get: async () => {
//       console.log(`INIT >> FETCH ${COMMON_KEY}`);
//       const { KR, US } = (await getInfo()).data;
//       const rate = (await getRate()).data;
//       return { KR, US, rate };
//     },
//   }),
//   effects: [persistAtom],
// });
