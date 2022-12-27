using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using proAtividadeAPI.Data;
using proAtividadeAPI.Models;

namespace proAtividadeAPI.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class AtividadeController : ControllerBase
  {
    private readonly DataContext _context;

    public AtividadeController(DataContext context)
    {
      _context = context;
    }

    [HttpGet]
    public IEnumerable<Atividade> GetAllTasks()
    {
      return _context.Atividades;
    }

    [HttpGet("{id}")]
    public Atividade GetTaskById(int id)
    {
      return _context.Atividades.FirstOrDefault(atv => atv.Id == id);
    }

    [HttpPost]
    public Atividade Post(Atividade atv)
    {

      _context.Atividades.Add(atv);
      if (_context.SaveChanges() > 0)
        return atv;
      else
        throw new Exception("Não foi possível adicionar a atividade.");
    }

    [HttpPut("{id}")]
    public Atividade Put(int id, Atividade atv)
    {
      if (atv.Id != id)
        throw new Exception("Não é possível atualizar tarefas difentes");

      _context.Update(atv);
      if (_context.SaveChanges() > 0)
        return _context.Atividades.FirstOrDefault(atv => atv.Id == id);
      else
        throw new Exception("Não é possível atualizar tarefas diferentes.");
    }

    [HttpDelete("{id}")]
    public bool Delete(int id)
    {
      var task = _context.Atividades.FirstOrDefault(atv => atv.Id == id);
      if (task == null)
        throw new Exception($"Não foi possível deletar a tarefa com id = {id}");

      _context.Remove(task);
      return _context.SaveChanges() > 0;
    }
  }
}