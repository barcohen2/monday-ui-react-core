import PropTypes from "prop-types";
import cx from "classnames";
import { BEMClass } from "../../helpers/bem-helper";
import Check from "../../components/Icon/Icons/components/Check";
import CloseSmall from "../../components/Icon/Icons/components/CloseSmall";
import { RECOMMENDED_TITLE, NOT_RECOMMENDED_TITLE, COMPONENT_RULE_BASE_CSS_CLASS } from "./component-rule-constants";
import Icon from "../../components/Icon/Icon";
import "./component-rule.scss";

const bemHelper = BEMClass(COMPONENT_RULE_BASE_CSS_CLASS);
export const ComponentRule = ({ component, explanation, isRecommended }) => {
  const stateDescription = isRecommended ? "recommended" : "not-recommended";
  const titleIcon = isRecommended ? Check : CloseSmall;
  const title = isRecommended ? RECOMMENDED_TITLE : NOT_RECOMMENDED_TITLE;
  return (
    <section className={cx(COMPONENT_RULE_BASE_CSS_CLASS, bemHelper({ state: stateDescription }))}>
      <figure className={bemHelper({ element: "component" })}>{component}</figure>
      <h4 className={bemHelper({ element: "title" })}>
        <Icon icon={titleIcon} className={bemHelper({ element: "icon" })} clickable={false} />
        {title}
      </h4>
      <article className={bemHelper({ element: "explanation" })}>{explanation}</article>
    </section>
  );
};

ComponentRule.propTypes = {
  component: PropTypes.element,
  explanation: PropTypes.string,
  isRecommended: PropTypes.bool
};

ComponentRule.defaultProps = {
  isRecommended: false,
  component: undefined,
  explanation: ""
};