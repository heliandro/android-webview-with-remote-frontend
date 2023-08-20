interface Window {
    NativeBridge: NativeBridge
}
  
interface NativeBridge {
    showToast(message: string): void
}