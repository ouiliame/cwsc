export abstract class PipelineStage<I = any, O = any> {
  abstract process(ctx: any, input: I): O;
}

export abstract class Pipeline<I = any, O = any> {
  constructor(public ctx: any) {}

  abstract get stages(): PipelineStage[];

  public run(input: I): O {
    let result: any = input;
    this.beforeAll?.();
    for (const stage of this.stages) {
      this.beforeEach?.();
      result = stage.process(this.ctx, result);
      this.afterEach?.();
    }
    this.afterAll?.();
    return result;
  }

  public beforeAll?(): void;
  public afterAll?(): void;
  public beforeEach?(): void;
  public afterEach?(): void;
}
