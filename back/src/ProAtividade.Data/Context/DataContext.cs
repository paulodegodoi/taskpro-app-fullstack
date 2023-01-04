using Microsoft.EntityFrameworkCore;
using proAtividade.Domain.Entities;
using ProAtividade.Data.Mappings;

namespace proAtividade.Data.Context
{
  public class DataContext : DbContext
  {
    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {
    }
    public DbSet<Atividade> Atividades { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      modelBuilder.ApplyConfiguration(new AtividadeMap());
    }
  }
}