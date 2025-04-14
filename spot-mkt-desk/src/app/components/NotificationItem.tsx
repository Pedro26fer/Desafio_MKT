interface NotificationItemProps {
    message: string;
    time: string;
  }
  
 function NotificationItem({ message, time }: NotificationItemProps) {
    return (
      <div className="border-b last:border-0 py-3 mt-0">
        <p className="text-sm text-gray-800">{message}</p>
        <p className="text-xs text-gray-400">{time}</p>
      </div>
    );
  }

  export default NotificationItem;