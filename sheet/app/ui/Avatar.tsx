import Image from 'next/image';

interface AvatarProps {
  src: string;
  alt?: string;
  width: number;
  height: number;
  hasStatus?: boolean;
  status?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({
  src = '/Avatar-1.webp',
  alt = '',
  width,
  height,
  hasStatus = false,
  status = false,
}) => {
  return (
    <div className="relative">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-full"
      />
      {hasStatus ? (
        <div
          className={`absolute right-0 bottom-0 rounded-full w-2 h-2 ${status ? 'bg-success-main' : 'bg-warning-main'}`}
        ></div>
      ) : null}
    </div>
  );
};

export default Avatar;
