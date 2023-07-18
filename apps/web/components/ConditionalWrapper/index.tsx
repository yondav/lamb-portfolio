import type { FC } from 'react';

interface ConditionalWrapProps {
  condition: boolean;
  renderWrap: (children: JSX.Element) => JSX.Element;
  children: JSX.Element;
}

const ConditionalWrapper: FC<ConditionalWrapProps> = ({
  condition,
  renderWrap,
  children,
}) => (condition ? renderWrap(children) : children);

export default ConditionalWrapper;
export type { ConditionalWrapProps };
