import React from "react";
import { io } from "socket.io-client";
import { API_URL } from "../services/api";

export const socket = io(API_URL as string);

export const SocketContext = React.createContext(socket);
