import { Controller } from "egg";

class ReportController extends Controller {
  async query() {
    const { ctx, service } = this;
    const { query } = ctx;

    ctx.helper.validate("query", query);

    const result = await service.report.query(query).catch(() => 15000);
    ctx.helper.send(result);
  }

  async info() {
    const { ctx, service } = this;
    const id = ctx.params.id;

    ctx.helper.validate("id", { id });

    const result = await service.report.info(id).catch(() => 15001);
    ctx.helper.send(result);
  }

  async create() {
    const { ctx, service } = this;
    const data = ctx.request.body;
    const userId = ctx.state.user._id;

    data.author = userId;
    ctx.helper.validate("report", data, true);

    const result = await service.report.create(data).catch(() => 15002);
    ctx.helper.send(result);
  }

  async update() {
    const { ctx, service } = this;
    const data = ctx.request.body;
    const id = ctx.params.id;

    ctx.helper.validate("id", { id });
    ctx.helper.validate("report", data);

    const result = await service.report.update([id], data).catch(() => 15003);
    ctx.helper.send(result);
  }

  async updateMany() {
    const { ctx, service } = this;
    const data = ctx.request.body;
    const { ids } = data;

    ctx.helper.validate("ids", { ids });
    ctx.helper.validate("report", data);

    const result = await service.report
      .update(data.ids, data)
      .catch(() => 15003);
    ctx.helper.send(result);
  }

  async destroy() {
    const { ctx, service } = this;
    const id = ctx.params.id;

    ctx.helper.validate("id", { id });

    const result = await service.report.destroy([id]).catch(() => 15004);
    ctx.helper.send(result);
  }

  async destroyMany() {
    const { ctx, service } = this;
    const { ids } = ctx.request.body;

    ctx.helper.validate("ids", { ids });

    const result = await service.report.destroy(ids).catch(() => 15004);
    ctx.helper.send(result);
  }
}

export default ReportController;
