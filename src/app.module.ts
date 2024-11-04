import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './order/order.module';
import { CqrsModule } from '@nestjs/cqrs';
import { ReportModule } from './report/report.module';

@Module({
  imports: [OrderModule, CqrsModule.forRoot(), ReportModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
