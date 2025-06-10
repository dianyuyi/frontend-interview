import Image from 'next/image';

interface AvatarProps {
  id: number;
  width: number;
  height: number;
  hasStatus?: boolean;
  status?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({
  id,
  width,
  height,
  hasStatus = false,
  status = false,
}) => {
  const src = `/avatar-${id % 8}.webp`;

  return (
    <div className="relative">
      <Image
        src={src}
        alt={`Avatar-image-${id}`}
        width={width}
        height={height}
        className="rounded-full"
      />
      {hasStatus ? (
        <div className={`absolute right-0 bottom-0 rounded-full w-2 h-2 ${status ? 'bg-success-main': 'bg-warning-main'}`}></div>
      ) : null}
    </div>
  );
};

export default Avatar;
