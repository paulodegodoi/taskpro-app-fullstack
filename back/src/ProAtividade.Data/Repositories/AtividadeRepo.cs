using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using proAtividade.Data.Context;
using proAtividade.Domain.Entities;
using ProAtividade.Domain.Interfaces.Repositories;

namespace ProAtividade.Data.Repositories
{
  public class AtividadeRepo : GenericRepo, ITaskRepo
  {
    private readonly DataContext _context;

    public AtividadeRepo(DataContext context) : base(context)
    {
      _context = context;
    }
    public async Task<Atividade> GetTaskByIdAsync(int id)
    {
      IQueryable<Atividade> query = _context.Atividades;
      query = query.AsNoTracking().OrderBy(task => task.Id).Where(task => task.Id == id);

      return await query.FirstOrDefaultAsync();
    }
    public async Task<Atividade> GetTaskByNameAsync(string name)
    {
      IQueryable<Atividade> query = _context.Atividades;
      query = query.AsNoTracking().OrderBy(task => task.Id).Where(task => task.Name == name);

      return await query.FirstOrDefaultAsync();
    }
    public async Task<Atividade[]> GetAllTasksAsync()
    {
      IQueryable<Atividade> query = _context.Atividades;
      query = query.AsNoTracking().OrderBy(task => task.Id);

      return await query.ToArrayAsync();
    }
  }
}