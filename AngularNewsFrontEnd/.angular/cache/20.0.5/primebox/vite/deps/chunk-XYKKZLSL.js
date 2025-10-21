import {
  BaseEditableHolder
} from "./chunk-DCFSMUFZ.js";
import {
  Fluid
} from "./chunk-6J2UV5GW.js";
import {
  Directive,
  booleanAttribute,
  computed,
  inject,
  input,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵdefineDirective,
  ɵɵgetInheritedFactory
} from "./chunk-KU7AL5JG.js";

// node_modules/primeng/fesm2022/primeng-baseinput.mjs
var BaseInput = class _BaseInput extends BaseEditableHolder {
  pcFluid = inject(Fluid, {
    optional: true,
    host: true,
    skipSelf: true
  });
  /**
   * Spans 100% width of the container when enabled.
   * @defaultValue false
   * @group Props
   */
  fluid = input(void 0, {
    transform: booleanAttribute
  });
  /**
   * Specifies the input variant of the component.
   * @defaultValue 'outlined'
   * @group Props
   */
  variant = input();
  /**
   * Specifies the size of the component.
   * @defaultValue undefined
   * @group Props
   */
  size = input();
  /**
   * Specifies the visible width of the input element in characters.
   * @defaultValue undefined
   * @group Props
   */
  inputSize = input();
  /**
   * Specifies the value must match the pattern.
   * @defaultValue undefined
   * @group Props
   */
  pattern = input();
  /**
   * The value must be greater than or equal to the value.
   * @defaultValue undefined
   * @group Props
   */
  min = input();
  /**
   * The value must be less than or equal to the value.
   * @defaultValue undefined
   * @group Props
   */
  max = input();
  /**
   * Unless the step is set to the any literal, the value must be min + an integral multiple of the step.
   * @defaultValue undefined
   * @group Props
   */
  step = input();
  /**
   * The number of characters (code points) must not be less than the value of the attribute, if non-empty.
   * @defaultValue undefined
   * @group Props
   */
  minlength = input();
  /**
   * The number of characters (code points) must not exceed the value of the attribute.
   * @defaultValue undefined
   * @group Props
   */
  maxlength = input();
  $variant = computed(() => this.variant() || this.config.inputStyle() || this.config.inputVariant());
  get hasFluid() {
    return this.fluid() ?? !!this.pcFluid;
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵBaseInput_BaseFactory;
    return function BaseInput_Factory(__ngFactoryType__) {
      return (ɵBaseInput_BaseFactory || (ɵBaseInput_BaseFactory = ɵɵgetInheritedFactory(_BaseInput)))(__ngFactoryType__ || _BaseInput);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _BaseInput,
    inputs: {
      fluid: [1, "fluid"],
      variant: [1, "variant"],
      size: [1, "size"],
      inputSize: [1, "inputSize"],
      pattern: [1, "pattern"],
      min: [1, "min"],
      max: [1, "max"],
      step: [1, "step"],
      minlength: [1, "minlength"],
      maxlength: [1, "maxlength"]
    },
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseInput, [{
    type: Directive,
    args: [{
      standalone: true
    }]
  }], null, null);
})();

export {
  BaseInput
};
//# sourceMappingURL=chunk-XYKKZLSL.js.map
