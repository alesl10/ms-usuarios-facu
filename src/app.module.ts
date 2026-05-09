import { Module } from '@nestjs/common';
import { HealthyModule } from './healthy/healthy.module';
import { SupabaseModule } from './supabase/supabase.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HealthyModule, SupabaseModule, UsuariosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
