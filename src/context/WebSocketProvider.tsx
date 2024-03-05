// import React, { ReactNode, createContext, useCallback, useContext, useEffect, useState } from "react";

// import { useHandleMessage } from "@/hooks/useHandleMessage";

// interface WebSocketContextProps {
//   send: (message: object) => void;
// }

// const WebSocketContext = createContext<WebSocketContextProps | undefined>(undefined);

// interface WebSocketProviderProps {
//   children: ReactNode;
// }

// export const WebSocketProvider: React.FC<WebSocketProviderProps> = ({ children }) => {
//   const [socket, setSocket] = useState<WebSocket | null>(null);

//   // 웹소켓 연결
//   const connect = useCallback(() => {
//     if (!socket) {
//       const newSocket = new WebSocket("ws://localhost:3000/socket");
//       setSocket(newSocket);
//       console.log("WEBSOCKET CONNECTED", newSocket);
//     }
//   }, [socket]);

//   // 웹소켓 연결 해제
//   const disconnect = useCallback(() => {
//     if (socket) {
//       socket.close();
//       console.log("WEBSOCKET DISCONNECTED");
//       setSocket(null);
//     }
//   }, [socket]);

//   // 메시지 전송
//   const send = useCallback(
//     (message: object) => {
//       if (socket) {
//         // 서버에서 오브젝트 그대로 받기 떄문에 문자열로 치환하지 않고 object 형식으로 전달합니다.
//         // eslint-disable-next-line
//         // @ts-ignore-next-line
//         socket.send(message);
//       }
//     },
//     [socket],
//   );

//   // 메시지 수신 리스너 등록
//   const onMessage = useCallback(
//     (callback: (message: MessageEvent) => void) => {
//       if (socket) {
//         socket.addEventListener("message", callback);
//       }
//     },
//     [socket],
//   );

//   const handleMessage = useHandleMessage();

//   // WebsocketProvider 마운트시
//   useEffect(() => {
//     connect(); // 웹소켓 연결
//     onMessage(handleMessage);
//     return () => disconnect(); // 웹소켓 연결해제
//   }, [connect, disconnect, handleMessage, onMessage]);

//   // 하위 컴포넌트에게 전달할 인자
//   const contextValue: WebSocketContextProps = {
//     send,
//   };
//   return <WebSocketContext.Provider value={contextValue}>{children}</WebSocketContext.Provider>;
// };

// // context 내의 함수들을 직접 사용할 수 있는 훅
// // eslint-disable-next-line react-refresh/only-export-components
// export const useWebSocket = () => {
//   const context = useContext(WebSocketContext);
//   if (!context) {
//     throw new Error("useWebSocket must be used within a WebSocketProvider");
//   }
//   return context;
// };
