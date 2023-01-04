using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using proAtividade.Data.Context;
using proAtividade.Domain.Entities;
using ProAtividade.Domain.Interfaces.Services;
using ProAtividade.Domain.Services;

namespace proAtividadeAPI.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class AtividadeController : ControllerBase
  {
    private readonly ITaskService _atividadeService;
    public AtividadeController(ITaskService atividadeService)
    {
      _atividadeService = atividadeService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAllTasks()
    {
      try
      {
        var tasks = await _atividadeService.GetAllTasksAsync();
        if (tasks == null) return NoContent();

        return Ok(tasks);
      }
      catch (System.Exception ex)
      {
        return this.StatusCode(StatusCodes.Status500InternalServerError, $"Erro ao tentar recuperar atividades. Erro: {ex.Message}");
      }
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetTaskById(int id)
    {
      try
      {
        var task = await _atividadeService.GetTaskByIdAsync(id);
        if (task == null) return NoContent();

        return Ok(task);
      }
      catch (System.Exception ex)
      {
        return this.StatusCode(StatusCodes.Status500InternalServerError, $"Erro ao tentar recuperar atividade com id: ${id}. Erro: {ex.Message}");
      }
    }

    [HttpPost]
    public async Task<IActionResult> Post(Atividade model)
    {
      try
      {
        var task = await _atividadeService.AddTask(model);
        if (task == null) return NoContent();

        return Ok(task);
      }
      catch (System.Exception ex)
      {
        return this.StatusCode(StatusCodes.Status500InternalServerError, $"Erro ao tentar salvar atividade. Erro: {ex.Message}");
      }
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Put(int id, Atividade model)
    {
      try
      {
        if (model.Id != id) return this.StatusCode(StatusCodes.Status409Conflict, "Não é possível atualizar tarefas com IDs diferentes difentes");
        var task = await _atividadeService.UpdateTask(model);
        if (task == null) return this.StatusCode(StatusCodes.Status409Conflict, $"Não é possível atualizar uma atividade inexistente.");

        return Ok(task);
      }
      catch (System.Exception ex)
      {
        return this.StatusCode(StatusCodes.Status500InternalServerError, $"Erro ao tentar recuperar atividade com id: ${id}. Erro: {ex.Message}");
      }
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
      try
      {
        var task = await _atividadeService.GetTaskByIdAsync(id);
        if (task == null) return this.StatusCode(StatusCodes.Status409Conflict, $"Não é possível deletar uma atividade inexistente.");

        if (await _atividadeService.DeleteTask(id))
        {
          return Ok(new { message = "Deletado" });
        }
        else
        {
          return BadRequest("Ocorreu um problema ao deletar a atividade");
        }
      }
      catch (System.Exception ex)
      {
        return this.StatusCode(StatusCodes.Status500InternalServerError, $"Erro ao tentar recuperar atividade com id: ${id}. Erro: {ex.Message}");
      }
    }
  }
}