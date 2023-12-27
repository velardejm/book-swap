import Button from './Button';
import { LuBookCopy } from 'react-icons/lu';

export default function Header() {
  return (
    <div className="flex justify-between items-center h-24">
      <a href='#'>
        <LuBookCopy className="h-full w-14" style={{color: 'blue'}} />
      </a>
      <div>
        <Button label={'Log in'} className={'btn btn-primary mx-3'} />
        <Button label={'Sign up'} className={'btn btn-primary'} />
      </div>
    </div>
  );
}
