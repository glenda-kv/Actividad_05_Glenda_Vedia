using ApiInicial.Models;
using Microsoft.AspNetCore.Mvc;

[ApiController]

[Route("api/v1/productos")]
public class ProductosController : ControllerBase
{
    private ProductoService _productoService;

    public ProductosController(ProductoService productoService)
    {
        this._productoService = productoService;
    }

    [HttpGet]
    public async Task<List<ProductoResponseDto>> ObtenerTodos()
    {
        return await _productoService.ObtenerTodosAsync();
    }

    [HttpGet("{id:int}")]
    public async Task<ProductoResponseDto> BuscarProductoId(int id)
    {
        return await _productoService.BuscarProductoPorIdAsync(id);
    }


    [HttpDelete("{id:int}")]
    public async Task<bool> EliminarProducto(int id)
    {
        return await _productoService.EliminarAsync(id);
    }

    [HttpPost]
    public async Task<ProductoResponseDto> CrearProducto(ProductoRequestDto producto)
    {
        return await _productoService.CrearProductoAsync(producto);
    }

    [HttpPatch("{id:int}")] //Por URL
    public async Task<ProductoResponseDto> ActualizarProducto(int id, ProductoRequestDto producto)
    {
        return await _productoService.ActualizarProducto(id, producto);
    }


}