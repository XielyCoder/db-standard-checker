/**
 * Electron 预加载脚本
 * 安全地将 Electron API 暴露给渲染进程
 */
import { contextBridge } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  platform: process.platform,
  isElectron: true,
});
