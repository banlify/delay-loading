export interface DirectiveInstance {
  delay: number;
  timer: null | number;
  ignore: boolean;
  stopped: boolean;
  initialized: boolean;
}

export interface DirectiveElement extends HTMLElement {
  instance: DirectiveInstance
}

export type DirectiveModifiers = Record<string, boolean>

export interface DirectiveBinding {
  arg?: string;
  value: boolean;
  oldValue: boolean | null;
  modifiers: DirectiveModifiers;
}
