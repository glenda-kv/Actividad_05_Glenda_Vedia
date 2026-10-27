using ApiInicial.Models;
public interface ICategoriaService
{
    Task<List<CategoriaResponseDto>> ObtenerTodosAsync();

    Task<CategoriaResponseDto> CrearCategoriaAsync(CategoriaRequestDto categoria);

    Task<CategoriaResponseDto> ActualizarCategoria(int id, CategoriaRequestDto categoria);

    Task<bool> EliminarCategoriaAsync(int id);

    Task<CategoriaResponseDto> BuscarCategoriaPorIdAsync(int id);
}