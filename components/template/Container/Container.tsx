import { CommonProps } from '@/@types/common';

interface ContainerProps extends CommonProps {}

const Container = ({ children }: ContainerProps) => {
  return <div className="px-2.5 md:px-5 mx-auto max-w-[1400px]">{children}</div>;
};

export default Container;
