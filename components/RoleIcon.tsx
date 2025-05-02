import { Role } from '@/lib/appwrite';
import { 
  UserCircle, 
  UserCog, 
  Code2, 
  GraduationCap 
} from 'lucide-react';

interface RoleIconProps {
  role: Role;
  size?: number;
  className?: string;
}

export const RoleIcon = ({ role, size = 24, className }: RoleIconProps) => {
  switch (role) {
    case 'ceo':
      return <UserCircle size={size} className={className} />;
    case 'manager':
      return <UserCog size={size} className={className} />;
    case 'cto':
      return <Code2 size={size} className={className} />;
    case 'intern':
      return <GraduationCap size={size} className={className} />;
    default:
      return <UserCircle size={size} className={className} />;
  }
};