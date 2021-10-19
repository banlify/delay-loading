export interface DirectiveInstance {
  delay: number;
  timer: number | undefined;
  ignore: boolean;
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
