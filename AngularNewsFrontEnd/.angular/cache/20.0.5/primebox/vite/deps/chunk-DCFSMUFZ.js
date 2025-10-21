import {
  BaseComponent
} from "./chunk-E7BX4L5J.js";
import {
  s2 as s
} from "./chunk-FWZ3WUZF.js";
import {
  Directive,
  booleanAttribute,
  computed,
  input,
  setClassMetadata,
  signal,
  ɵɵInheritDefinitionFeature,
  ɵɵdefineDirective,
  ɵɵgetInheritedFactory
} from "./chunk-KU7AL5JG.js";

// node_modules/primeng/fesm2022/primeng-baseeditableholder.mjs
var BaseEditableHolder = class _BaseEditableHolder extends BaseComponent {
  /**
   * There must be a value (if set).
   * @defaultValue false
   * @group Props
   */
  required = input(void 0, {
    transform: booleanAttribute
  });
  /**
   * When present, it specifies that the component should have invalid state style.
   * @defaultValue false
   * @group Props
   */
  invalid = input(void 0, {
    transform: booleanAttribute
  });
  /**
   * When present, it specifies that the component should have disabled state style.
   * @defaultValue false
   * @group Props
   */
  disabled = input(void 0, {
    transform: booleanAttribute
  });
  /**
   * When present, it specifies that the name of the input.
   * @defaultValue undefined
   * @group Props
   */
  name = input();
  modelValue = signal(void 0);
  $filled = computed(() => s(this.modelValue()));
  writeModelValue(value, event) {
    this.modelValue.set(value);
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵBaseEditableHolder_BaseFactory;
    return function BaseEditableHolder_Factory(__ngFactoryType__) {
      return (ɵBaseEditableHolder_BaseFactory || (ɵBaseEditableHolder_BaseFactory = ɵɵgetInheritedFactory(_BaseEditableHolder)))(__ngFactoryType__ || _BaseEditableHolder);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _BaseEditableHolder,
    inputs: {
      required: [1, "required"],
      invalid: [1, "invalid"],
      disabled: [1, "disabled"],
      name: [1, "name"]
    },
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseEditableHolder, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], null, null);
})();

export {
  BaseEditableHolder
};
//# sourceMappingURL=chunk-DCFSMUFZ.js.map
