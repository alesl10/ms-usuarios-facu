import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { SupabaseService } from 'src/supabase/supabase.service';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class UsuariosService {

  constructor(
    private readonly supabaseService: SupabaseService,
    private readonly httpService: HttpService
  ) { }


  create(createUsuarioDto: CreateUsuarioDto) {
    return 'This action adds a new usuario';
  }

  async findAll() {
    const client = this.supabaseService.getClient();
    const { data, error } = await client
      .from('clientes')
      .select('*');

    if (error) throw error;

    return data;
  }

  async findOne(id: string) {
    const client = this.supabaseService.getClient();
    const { data: usuario, error } = await client
      .from('clientes')
      .select('*')
      .eq('id', id)
      .single();

    if (error || !usuario) {
      throw new NotFoundException(`El usuario con ID ${id} no existe`);
    }

    try {
      // const urlReservas = `https://ms-reservas.onrender.com/reservas?usuarioId=${id}`;

      // const { data: reservas } = await firstValueFrom(
      //   this.httpService.get(urlReservas)
      // );

      const { data: reservas, error: errorReservas } = await client
      .from('reservas')
      .select('*')
      .eq('usuarioId', id);

      return {
        ...usuario,
        reservas: reservas
      };
    } catch (error) {
      return {
        ...usuario,
        reservas: []
      };
    }
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
