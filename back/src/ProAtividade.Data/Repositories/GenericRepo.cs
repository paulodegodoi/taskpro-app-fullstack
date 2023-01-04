using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using proAtividade.Data.Context;
using ProAtividade.Domain.Interfaces.Repositories;

namespace ProAtividade.Data.Repositories
{
  public class GenericRepo : IGenericRepo
  {
    private readonly DataContext _context;

    public GenericRepo(DataContext context)
    {
      _context = context;
    }
    public void Add<T>(T entity) where T : class
    {
      _context.Add(entity);
    }

    public void Update<T>(T entity) where T : class
    {
      _context.Update(entity);
    }

    public void Delete<T>(T entity) where T : class
    {
      _context.Remove(entity);
    }

    public async Task<bool> SaveChangesAsync()
    {
      return (await _context.SaveChangesAsync()) > 0;
    }


  }
}