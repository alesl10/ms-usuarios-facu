import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { SupabaseModule } from 'src/supabase/supabase.module';

@Module({
  controllers: [UsuariosController],
  providers: [UsuariosService],
  imports:[SupabaseModule]
})
export class UsuariosModule {}
