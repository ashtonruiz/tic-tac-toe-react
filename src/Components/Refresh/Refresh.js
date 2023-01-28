import { useState } from 'react';

export default function Refresh() {
  const [refreshBoard, setRefreshBoard] = useState('');
  refreshBoard([
    { space: 0, content: '' },
    { space: 1, content: '' },
    { space: 2, content: '' },
    { space: 3, content:'' },
    { space: 4, content: '' },
    { space: 5, content:'' },
    { space: 6, content: '' },
    { space: 7, content:'' },
    { space: 8, content:'' }]);
      
  return (refreshBoard, setRefreshBoard);
} 
