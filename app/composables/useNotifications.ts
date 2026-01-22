type ToastColor = "primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral";

export interface NotificationData {
  title: string;
  description: string;
  color?: ToastColor;
  type?: NotificationType;
}

export enum NotificationType {
  SYSTEM = 'system'
}

export const useNotifications = () => {
  const toast = useToast()

  const handleSystemNotification = (notification: NotificationData) => {
    if (!notification.title && !notification.description) return

    toast.add({
      title: notification.title || '',
      description: notification.description || '',
      color: notification.color || 'neutral'
    })
  }

  const handleNotification = (notification: NotificationData) => {
    switch (notification.type) {
      case NotificationType.SYSTEM:
        handleSystemNotification(notification)
        break
    }
  }

  return {
    handleSystemNotification,
    handleNotification
  }
}
