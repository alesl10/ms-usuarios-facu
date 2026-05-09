import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { SupabaseModule } from 'src/supabase/supabase.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [UsuariosController],
  providers: [UsuariosService],
  imports:[SupabaseModule, HttpModule]
})
export class UsuariosModule {}
