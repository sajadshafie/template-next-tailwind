import {
  ReactNode,
  Children,
  isValidElement,
  cloneElement,
  ReactElement,
  JSXElementConstructor,
  ReactPortal,
} from "react";

type Props = { [key: string]: any };
type RenderProps = (
  childProps: Props,
  child:
    | ReactPortal
    | ReactElement<unknown, string | JSXElementConstructor<any>>,
) => Props;

interface Arguments {
  children: ReactNode;
  renderProps: RenderProps;
}

function mapChildrenWithProps({ children, renderProps }: Arguments): ReactNode {
  return Children.map(children, (child) => {
    // * checks for texts or anything thats not a element
    if (!isValidElement(child)) return child;

    const extraProps = renderProps(child.props, child);
    return cloneElement(child, {
      ...child.props,
      ...extraProps,
      children: mapChildrenWithProps({
        children: child.props.children,
        renderProps: renderProps,
      }),
    });
  });
}

export default mapChildrenWithProps;
